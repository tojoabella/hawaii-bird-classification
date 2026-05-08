function AbstractPage() {
  return (
    <div className="page_container">
      <div className="title">
        <h1>Abstract</h1>
        <p>Author: Tojo Abella</p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-sm space-y-8">
          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Problem
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                This research presents a comparative analysis of deep learning
                architectures for classification of native versus non-native
                bird species in Hawaii. With the increasing importance of
                biodiversity conservation and ecological impact of invasive
                species, especially in Hawaii, the “Endangered Species Capital
                of the World,” accurately distinguishing between native and
                introduced species is a pressing need. However, existing
                datasets and models primarily focus on species classification
                without specifically addressing this distinction, and do not
                have a focus on Hawaiian wildlife. To bridge these gaps, we
                utilized iNaturalist to curate a comprehensive, inaugural
                dataset comprising of images and metadata of avian species found
                in Hawaii. Leveraging this dataset, we propose a novel machine
                learning model capable of effectively categorizing bird species
                into native and nonnative classes, thus facilitating ecological
                research and conservation efforts.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Data
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                iNaturalist, a repository of crowd-sourced observations,
                currently holds over 60,000 research graded images (community
                backed species identifications) of wild birds in Hawaii. It is
                both a vast and continually growing repository of labelled
                images along with corresponding metadata, thus standing as a
                pivotal factor in its use as a data source for machine learning
                applications. The data was filtered down to 20,000 data points,
                with a balance of 10,000 images for both native and introduced
                birds. We provided a diverse set of species for both labels to
                create a holistic representation of common birds in Hawaii. Each
                species had a maximum representation of 750 images and a minimum
                representation of 100 images for a maximal class imbalance
                factor of 7.5 between any two of the 43 species (Table I). We
                included corresponding metadata such as locality and
                temporality, with feature engineering for seasonality, for
                future research utilizing multimodal methods that take as input
                both images and metadata.
              </p>
              <p>
                Most raw images had a height and width of 500 pixels or less.
                Thus, it was deemed that resizing images to a height and width
                of 200x200 would sufficiently downscale images to reduce
                computational complexity while also maintaining important
                features for the classification task. Images were naively
                resized to a shape of 200x200x3 without preserving scale. We
                removed the fourth channel in 4-channel images such as RGBA and
                included two duplicate channels for single-channel images such
                as black and white images. GIFs were converted to images by
                using the first frame of each GIF. All pixels were normalized.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Methods
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                With respect to species origination (native vs introduced), we
                tested four binary classification models: a bespoke CNN (Figure
                1.1), a Inceptionv3 model (Figure 2.1), a VGG19 model (figure
                3.1), and a ResNet50V2 model (Figure 4.1). All models except the
                bespoke architecture utilized transfer learning from ImageNet
                pre-trained weights. We leveraged pre-trained deep learning
                architectures because they were trained on datasets orders of
                magnitudes larger and have been widely used for image
                classification, with empirical success with transfer learning.
                Each transfer learned model had frozen pretrained layers, then a
                global average pooling layer, then two fully connected layers of
                1024 units with a ReLU activation and final unit with a sigmoid
                activation. All models utilized Adam optimization with a
                learning rate of 0.01 and a batch size of 32. Binary
                cross-entropy loss was used as the objective function.
              </p>
              <p>
                The training set consisted of random sample of an 80:20 train to
                test split, each with a balanced set of labels. More
                specifically, the training set consisted of 16,000 images with
                7981 images being labelled “introduced”. Of the training set,
                20% (3200 samples) were kept as a validation set to monitor
                model performance during training. We enforced early stopping
                when the validation loss stopped decreasing to prevent
                overfitting on the validation set. The performance of each model
                was conducted on a held-out test set of 4,000 images and
                measured by a ROC curve and corresponding AUROC value as shown
                in Figures 1.2, 2.2, 3.2, and 4.2.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Results
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The transfer learned models consistently outperformed the
                bespoke CNN, and the best transfer learned model was the
                Inceptionv3 with an AUC of 0.96 on the test set after 10 epochs.
                After 20 epochs, the AUC score reduced to 0.95, a potential sign
                of the model beginning to overfit.
              </p>
              <p>
                Since the dataset was moderately imbalanced in terms of species
                labelling, we also trained a transfer learned Inceptionv3 model
                for multiclass classification for species identification (Figure
                5.1). Its architecture, with exception to its final fully
                connected layer, was the same as its binary classification
                counterpart. The models final layer had 43 nodes for each class
                and a SoftMax activation. The model also had an 80:20 train to
                test split on the 20,000 images and an 80:20 train to validation
                split on the training set, with the same early stopping
                characteristics used for binary classification.
              </p>
              <p>
                The performance of the model was measured by precision per
                class, recall per class, and F1 score per class, as well as
                macro-averaged precision, recall, and F1 scores (Figure 5.2).
                The final Inceptionv3 model performance had a macro-level
                precision of 0.38, recall of 0.30, and F1 of 0.30.
                Interestingly, during training, the validation accuracy started
                at 0.29 and did not pass 0.38 after 100 epochs. However, it is
                important to note that classifying between 43 potential classes
                is a harder problem than classifying between two classes. Thus,
                a secondary evaluation metric was used on the model to deem a
                prediction as correct if the predicted probability of the
                correct species was among the top 5 predicted probabilities
                between all species. The macro average precision, recall, and F1
                scores respectively in this case was 0.80, 0.61, and 0.64
                (Figure 5.3).
              </p>
            </div>
          </section>
          <section>
            <h2 className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Future Work
            </h2>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The dataset seemed to provide a large enough labelled dataset of
                birds of Hawaii to build a reasonably confident image classifier
                to distinguish between native and introduced species of birds.
                In terms of future work, we have large interest in both
                expanding the dataset via augmentation and using more robust
                preprocessing techniques, hyperaparameter tuning, regularization
                techniques, and testing of additional architectures. We explored
                using the state-of-the-art segmentation tool, GroundingDINO, as
                a means of locating the bird of interest in the photo. We found
                it to accurately output coordinates of a bounding box, thus
                giving a confident means of cropping background in images.
                However, we did not have the resources to apply this technique
                to our dataset in the current research. Along with preprocessing
                techniques, we hope to expand this task and dataset to other
                types of wildlife data in iNaturalist, including plants and
                fish, as conservation efforts span multiple taxa. We'd also like
                to explore ways to promote the use of origin labelling and
                species identification in tandem. This could look like mapping
                to origin probabilities after outputting species probabilities.
                It could also look like a multitask problem, as species
                identification is inherently tied to origin identification.
                Finally, we'd like to use multimodal methods to incorporate the
                metadata we curated.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AbstractPage;
