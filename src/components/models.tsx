import { useState } from "react";

import vgg19 from "../assets/vgg19_architecture.png";
import inceptionv3 from "../assets/inceptionv3_architecture.png";
import resnet from "../assets/resnet_architecture.png";
import custom from "../assets/custom_architecture.png";

const models = [
  {
    name: "VGG19",
    image: vgg19,
    paper: "https://arxiv.org/abs/1409.1556",
    tensorflow:
      "https://www.tensorflow.org/api_docs/python/tf/keras/applications/vgg19",
  },
  {
    name: "Inceptionv3",
    image: inceptionv3,
    paper: "https://arxiv.org/abs/1512.00567",
    tensorflow:
      "https://www.tensorflow.org/api_docs/python/tf/keras/applications/inceptionv3",
  },
  {
    name: "ResNet50v2",
    image: resnet,
    paper: "https://arxiv.org/abs/1512.03385",
    tensorflow:
      "https://www.tensorflow.org/api_docs/python/tf/keras/applications/resnet50v2",
  },
  { name: "Custom", image: custom, paper: "#", tensorflow: "#" },
];

function ShowArchitecture({ activeSet }: { activeSet: Set<string> }) {
  return (
    <div className="flex items-center justify-top flex-wrap mt-10 border-t">
      {Array.from(activeSet).map((modelName) => {
        const model = models.find((m) => m.name === modelName);
        if (!model) return null;
        return (
          <>
            <div className="flex flex-col items-center justify-center gap-10">
              <p className="text-2xl font-bold mb-4">
                {modelName} Architecture
              </p>
              {model.paper !== "#" && (
                <a
                  href={model.paper}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Research paper
                </a>
              )}
              {model.tensorflow !== "#" && (
                <a
                  href={model.tensorflow}
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  Tensorflow documentation
                </a>
              )}
              <img src={model.image} alt={modelName} className="m-4" />
            </div>
          </>
        );
      })}
    </div>
  );
}

function ModelCard({
  modelName,
  onToggle,
}: {
  modelName: string;
  onToggle: (modelName: string) => void;
}) {
  /*
    Note: In react, arguments are called props, and props must be a single object passed from parent to child. Instead of passing multiple arguments to ModelCard, we pass a single object that contains all the necessary information (modelName and onToggle function).

    Note: ModelCard can't communicate with ShowArchitecture directly since they are siblings. Information travels from parent to child. So ModelsPage (the parent) holds the state of which architectures to show, and passes down a toggle function to ModelCard to update that state, which then causes ModelsPage to re-render and pass the updated state to ShowArchitecture, which will then show/hide the appropriate architectures based on the updated state.
    */
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold text-center">{modelName}</h3>
      <button
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => {
          onToggle(modelName);
        }}
      >
        View Details
      </button>
    </div>
  );
}

function ModelsPage() {
  /* Note: Iteration 1 used four useStates to track whether each architecture should be shown, but that doesn't scale well if we add more models. Instead, we can use a single useState that holds a Set of model names that should be shown. This way, we can easily add more models without needing to add more state variables or toggle functions.
  
  Note: Originally, ShowArchitecture was called on clicking the button. React doesn't work that way - we don't directly call components like functions to show/hide them. Instead, we update the state, which causes a re-render, and then in the render logic we decide whether to include ShowArchitecture in the output based on the current state. So now, instead of calling ShowArchitecture on button click, we just update the state on button click -> ModelsPage re-renders -> ShowArchitecture runs and decides what to show based on the updated state.
   */
  const [shownArchitectures, setShownArchitectures] = useState<Set<string>>(
    new Set(),
  );

  const onToggle = (modelName: string) => {
    const newShown = new Set(shownArchitectures);
    if (newShown.has(modelName)) {
      newShown.delete(modelName);
    } else {
      newShown.add(modelName);
    }
    setShownArchitectures(newShown);
  };

  return (
    <>
      <div className="flex justify-center items-center mt-12">
        {models.map((model) => {
          return (
            <ModelCard
              key={model.name}
              modelName={model.name}
              onToggle={onToggle}
            />
          );
        })}
      </div>
      <ShowArchitecture activeSet={shownArchitectures} />
    </>
  );
}

export default ModelsPage;
