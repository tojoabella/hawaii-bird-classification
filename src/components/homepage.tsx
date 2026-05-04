import { useState } from "react";

function ImagePlaceholder() {
  return (
    <div className="flex flex-col justify-center items-center w-128 h-64 bg-gray-300 rounded-lg">
      <p className="text-gray-700 text-center">
        Drag and drop an image here, or click to browse
      </p>
      <button className="mx-4 px-4 py-2 bg-black text-white hover:bg-blue-600 rounded-lg mt-4">
        Select Image
      </button>
    </div>
  );
}

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

function HomePage() {
  const [vggpred, setStateVgg] = useState("");
  const [inceptionpred, setStateInception] = useState("");
  const [resnetpred, setStateResnet] = useState("");
  const [custompred, setStateCustom] = useState("");
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        <ImagePlaceholder />
      </div>
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
