import os
os.environ["TF_USE_LEGACY_KERAS"] = "1"   # the .keras files were saved with Keras 2; TF 2.19 ships Keras 3
os.chdir(os.path.dirname(os.path.abspath(__file__)))
import tensorflow as tf
import tensorflowjs as tfjs

MODELS = {
    #"vgg19":       "vgg19.keras",
    #"inceptionv3": "inceptionv3.keras",
    "resnet50v2":  "resnet.keras",
    "custom":      "custom.keras",
}

OUT_ROOT = "../public/tfjs_models"

# 'float16' -> ~2x smaller, negligible accuracy loss (safe default)
# 'uint8'   -> ~4x smaller, may hurt accuracy near the 0.5 sigmoid threshold
# None      -> no quantization
QUANT = "float16"

quant_map = {QUANT: "*"} if QUANT else None

for name, path in MODELS.items():
    print(f"== {name} ({path}) ==")
    model = tf.keras.models.load_model(path, compile=False)
    out_dir = os.path.join(OUT_ROOT, name)
    os.makedirs(out_dir, exist_ok=True)
    tfjs.converters.save_keras_model(model, out_dir, quantization_dtype_map=quant_map)
    print(f"  -> {out_dir}/model.json")
