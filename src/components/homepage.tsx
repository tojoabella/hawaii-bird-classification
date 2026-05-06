import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

function ModelCard({
  modelName,
  prediction,
}: {
  modelName: string;
  prediction: string;
}) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold ">{modelName}</h3>
      <p className="text-gray-700 py-2">Prediction: {prediction}</p>
    </div>
  );
}

function MyDropzone() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setSelectedImage(
      acceptedFiles.length > 0 ? URL.createObjectURL(acceptedFiles[0]) : null,
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        {...getRootProps()}
        className="flex justify-center items-center w-128 h-64 rounded-lg  cursor-pointer overflow-hidden border-dashed border-2 border-gray-300 bg-gray-50"
      >
        <input {...getInputProps()} />
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-contain"
          />
        ) : isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image here, or click to select a file</p>
        )}
      </div>
    </div>
  );
}

function HomePage() {
  const [vggpred, setStateVgg] = useState("");
  const [inceptionpred, setStateInception] = useState("");
  const [resnetpred, setStateResnet] = useState("");
  const [custompred, setStateCustom] = useState("");
  return (
    <>
      <div className="title">
        <h1>Model Inference</h1>
        <p>Upload an image to classify native vs non-native bird species</p>
      </div>

      <MyDropzone />
      {/* 
      {
        const vgg_model = null; // placeholder for actual model
        const inception_model = null; // placeholder for actual model
        const resnet_model = null; // placeholder for actual model
        const custom_model = null; // placeholder for actual model
        const image = null; // placeholder for actual image
        if (vgg_model && image) {
        res_vgg = vgg_model.predict(image).dataSync();
        setStateVgg(res_vgg);
        }
        if (inception_model && image) {
        inception_model.predict(image).dataSync();
        setStateInception(res_inception);
        }
        if (resnet_model && image) {
        resnet_model.predict(image).dataSync();
        setStateResnet(res_resnet);
        }
        if (custom_model && image) {
        custom_model.predict(image).dataSync();
        setStateCustom(res_custom);
        }
      } */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <ModelCard modelName="VGG19" prediction={vggpred} />
        <ModelCard modelName="Inceptionv3" prediction={inceptionpred} />
        <ModelCard modelName="ResNet50v2" prediction={resnetpred} />
        <ModelCard modelName="Custom" prediction={custompred} />
      </div>
    </>
  );
}

export default HomePage;
