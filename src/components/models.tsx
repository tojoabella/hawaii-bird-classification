function ModelCard({ modelName }: { modelName: string }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-bold text-center">{modelName}</h3>
    </div>
  );
}

function ModelsPage() {
  const models = ["VGG19", "Inceptionv3", "ResNet50v2", "Custom"];
  return (
    <>
      <div className="flex justify-center items-center mt-12">
        {models.map((model) => (
          <ModelCard key={model} modelName={model} />
        ))}
      </div>
    </>
  );
}

export default ModelsPage;
