type Todo = {
  name: string;
  description: string;
  priority: number;
};

const Todos: Todo[] = [
  {
    name: "Multimodal Methods",
    description:
      "Classification currently takes as input images only. Integrating data such as geographic location, datetime of capture, and sound of the organism could improve predictions.",
    priority: 0,
  },
  {
    name: "Ensembling",
    description:
      "Our final prediction is currently a mean of our two best usable models. We plan on using ensembling for a better data-driven approach to calculating the final prediction.",
    priority: 0,
  },
  {
    name: "Sets",
    description:
      "Our models will produce a probability given a single image. However, predictions and confidence could should intuitively improve given multiple images of the same organism. We plan for our models to be able to take as input a series of images to produce a prediction.",
    priority: 1,
  },
  {
    name: "Species Identification",
    description:
      "Along with origin classification (native vs non-native), we also plan to train models for species identification of all species in Hawaii.",
    priority: 0,
  },
  {
    name: "Architectural Variation",
    description:
      "The current models utilize a select set of transfer-learned models trained on ImageNet. We will explore other architectures and methods including vision transformers, which tend to work will with more data",
    priority: 0,
  },
  {
    name: "Species Variation",
    description:
      "The current models focus on bird classification, but future development will aim to support the broader range of taxonomic categories like fish, insects, plants, mammals, etc.",
    priority: 0,
  },
  {
    name: "Attention Visualization",
    description:
      "Implement SHAP values or Grad-CAM to visualize which image regions drive predictions.",
    priority: 0,
  },
  {
    name: "Self-supervised Methods",
    description:
      "The data used to train our models was a small subset of research-grade images from iNaturalist. We plan on using unlabelled and non-research-grade images to train better generative models with downstream classification tasks.",
    priority: 1,
  },
  {
    name: "Preprediction Techniques",
    description:
      "Dataset size could grow via augmentation. Preprocessing could be more robust. Pre-checks on images could be used to identify taxa/category, the presence/absence of an organism, images with multiple organisms present, etc.",
    priority: 1,
  },
  {
    name: "Active Learning Pipeline",
    description:
      "Allow users to submit corrections and retrain models incrementally with growing observations.",
    priority: 0,
  },
  {
    name: "Temporal Analysis",
    description: "Track bird population changes and patterns over time.",
    priority: 1,
  },
  {
    name: "Mobie Application",
    description:
      "Deploy lightweight model variant for i0S and Andriod devices.",
    priority: 2,
  },
];

function TodoCard({ todo }: { todo: Todo }) {
  return (
    <div className="rounded-lg border border-gray-200 p-4 w-2xl">
      <div className="flex justify-between items-center pb-3">
        <div>{todo.name}</div>
        <div
          className={`text-xs p-1 rounded ${
            todo.priority == 0
              ? "bg-black text-white"
              : todo.priority == 1
                ? "bg-gray-300"
                : "bg-gray-100"
          }`}
        >
          {todo.priority == 0 ? "high" : todo.priority == 1 ? "medium" : "low"}
        </div>
      </div>
      <p className="text-sm text-gray-600">{todo.description}</p>
    </div>
  );
}

function UpcomingPage() {
  const todos_sorted = Todos.sort((a, b) => a.priority - b.priority);
  return (
    <>
      <div className="title">
        <h1>Upcoming</h1>
        <p>Future improvements and research directions</p>
      </div>
      <div className="flex flex-col items-center sm:gap-4 md:gap-6 pb-6">
        {todos_sorted.map((t) => {
          return <TodoCard todo={t} key={t.name} />;
        })}
      </div>
    </>
  );
}

export default UpcomingPage;
