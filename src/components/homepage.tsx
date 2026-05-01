function ImagePlaceholder() {
  return (
    <div className="flex flex-col justify-center items-center w-128 h-64 bg-gray-300 rounded-lg">
      <div className="">Image Placeholder</div>
      <button className="mx-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded">
        Path
      </button>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ImagePlaceholder />
      </div>
    </>
  );
}

export default HomePage;
