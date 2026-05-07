import * as tf from "@tensorflow/tfjs";

function PreprocessImage(image: HTMLImageElement): tf.Tensor3D {
  // Resize the image to 200x200x3 and normalize pixel values to [0, 1]

  const t = tf.tidy(() => {
    const tensor = tf.browser
      .fromPixels(image)
      .resizeBilinear([200, 200])
      .toFloat()
      .div(255.0)
      .expandDims(0) as tf.Tensor3D;
    return tensor;
  });
  return t;
}

function Predict(model: tf.LayersModel, image: HTMLImageElement): string {
  const preprocessed = PreprocessImage(image);
  const output = model.predict(preprocessed) as tf.Tensor;
  return output;
}

function PredictVGG19(image: HTMLImageElement): string {
  const model: tf.LayersModel = tf.loadLayersModel(
    "/tfjs_models/vgg19/model.json",
  );
  return Predict(model, image);
}

function PredictInceptionV3(image: HTMLImageElement): string {
  const model: tf.LayersModel = tf.loadLayersModel(
    "/tfjs_models/inceptionv3/model.json",
  );
  return Predict(model, image);
}

function PredictResNet50V2(image: HTMLImageElement): string {
  const model: tf.LayersModel = tf.loadLayersModel(
    "/tfjs_models/resnet50v2/model.json",
  );
  return Predict(model, image);
}

function PredictCustom(image: HTMLImageElement): string {
  const model: tf.LayersModel = tf.loadLayersModel(
    "/tfjs_models/custom/model.json",
  );
  return Predict(model, image);
}

export default {
  PredictVGG19,
  PredictInceptionV3,
  PredictResNet50V2,
  PredictCustom,
};
