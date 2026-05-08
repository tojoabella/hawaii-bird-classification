import * as tf from "@tensorflow/tfjs";

function PreprocessImage(image: HTMLImageElement): tf.Tensor {
  return tf.tidy(() => {
    return tf.browser
      .fromPixels(image)
      .resizeBilinear([200, 200])
      .toFloat()
      .div(255.0)
      .expandDims(0);
  });
}

const MODEL_PATHS = {
  vgg19: `${import.meta.env.BASE_URL}tfjs_models/vgg19/model.json`,
  inceptionv3: `${import.meta.env.BASE_URL}tfjs_models/inceptionv3/model.json`,
  resnet50v2: `${import.meta.env.BASE_URL}tfjs_models/resnet50v2/model.json`,
  custom: `${import.meta.env.BASE_URL}tfjs_models/custom/model.json`,
};

const modelCache = new Map<string, Promise<tf.LayersModel>>();

function loadModel(path: string): Promise<tf.LayersModel> {
  let cached = modelCache.get(path);
  if (!cached) {
    cached = tf.loadLayersModel(path);
    modelCache.set(path, cached);
  }
  return cached;
}

// Kick off all model downloads as soon as this module is imported,
// so the first prediction doesn't pay the full network cost.
Object.values(MODEL_PATHS).forEach(loadModel);

async function Predict(
  modelPath: string,
  image: HTMLImageElement,
): Promise<string> {
  const model = await loadModel(modelPath);
  const preprocessed = PreprocessImage(image);
  const output = model.predict(preprocessed) as tf.Tensor;
  const value = (await output.data())[0];
  preprocessed.dispose();
  output.dispose();
  return value.toString();
}

function PredictVGG19(image: HTMLImageElement): Promise<string> {
  return Predict(MODEL_PATHS.vgg19, image);
}

function PredictInceptionV3(image: HTMLImageElement): Promise<string> {
  return Predict(MODEL_PATHS.inceptionv3, image);
}

function PredictResNet50V2(image: HTMLImageElement): Promise<string> {
  return Predict(MODEL_PATHS.resnet50v2, image);
}

function PredictCustom(image: HTMLImageElement): Promise<string> {
  return Predict(MODEL_PATHS.custom, image);
}

export default {
  PredictVGG19,
  PredictInceptionV3,
  PredictResNet50V2,
  PredictCustom,
};
