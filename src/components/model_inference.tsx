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

async function Predict(
  model: tf.LayersModel,
  image: HTMLImageElement,
): Promise<string> {
  const preprocessed = PreprocessImage(image);
  const output = model.predict(preprocessed) as tf.Tensor;
  const value = (await output.data())[0];
  preprocessed.dispose();
  output.dispose();
  return value.toString();
}

async function PredictVGG19(image: HTMLImageElement): Promise<string> {
  const model = await tf.loadLayersModel("/tfjs_models/vgg19/model.json");
  return Predict(model, image);
}

async function PredictInceptionV3(image: HTMLImageElement): Promise<string> {
  const model = await tf.loadLayersModel(
    "/tfjs_models/inceptionv3/model.json",
  );
  return Predict(model, image);
}

async function PredictResNet50V2(image: HTMLImageElement): Promise<string> {
  const model = await tf.loadLayersModel(
    "/tfjs_models/resnet50v2/model.json",
  );
  return Predict(model, image);
}

async function PredictCustom(image: HTMLImageElement): Promise<string> {
  const model = await tf.loadLayersModel("/tfjs_models/custom/model.json");
  return Predict(model, image);
}

export default {
  PredictVGG19,
  PredictInceptionV3,
  PredictResNet50V2,
  PredictCustom,
};
