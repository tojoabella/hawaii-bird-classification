import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";

import Predict from "./model_inference";

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

function MyDropzone({
  selectedImage,
  setSelectedImage,
}: {
  selectedImage: string | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setSelectedImage(
        acceptedFiles.length > 0 ? URL.createObjectURL(acceptedFiles[0]) : null,
      );
    },
    [setSelectedImage],
  );

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedImage) return;
    let cancelled = false;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = selectedImage;
    img.onload = () => {
      if (cancelled) return;
      Predict.PredictVGG19(img).then((p) => {
        if (!cancelled) setStateVgg(p);
      });
      Predict.PredictInceptionV3(img).then((p) => {
        if (!cancelled) setStateInception(p);
      });
      Predict.PredictResNet50V2(img).then((p) => {
        if (!cancelled) setStateResnet(p);
      });
      Predict.PredictCustom(img).then((p) => {
        if (!cancelled) setStateCustom(p);
      });
    };

    return () => {
      cancelled = true;
    };
  }, [selectedImage]);

  return (
    <>
      <div className="title">
        <h1>Model Inference</h1>
        <p>Upload an image to classify native vs non-native bird species</p>
      </div>

      <MyDropzone
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />

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
