const whatDescription =
  'Student Performance Analysis & Result Prediction is a system of forecasting the outcome of student academic performance based on their previous performance results';
const whyDescription =
  'One of the common problems that most of the engineering institutions face in recent times is poor academic results. In the Context of Nepal, as for example, the statistics of the IOE semester result show that since 2009 A.D., the average pass percentage has been reducing on an average from 50% to 40% and moving towards decreasing scenarios [1]. The same situation goes for engineering education throughout the country. This issue is worrying because it affects not only the students but also the reputation of the institutions, which may lead to lower enrollment rates, and decreased job prospects for graduates.';
const whereDescription =
  'or academic purposes, developing a result prediction software using AI can provide valuable insights into the potential of machine learning algorithms to improve decision-making processes in the field of education.With the ability to analyze large datasets and identify patterns, this software can generate predictions related to student performance and outcomes. By providing educators with timely feedback, this technology has the potential to significantly enhance teaching and learning practices, leading to improved student outcomes and achievements.Overall, the development of a result prediction software using AI for academic purposes represents an important contribution to the field of education, providing educators and researchers with an innovative tool for improving decision-making processes and enhancing student outcomes';
const whenDescription =
  'The Project has been in development ever since the problem has been addressed which was around ealier 2023 and has been on developing stage. estimation time of project complition is August 2023';
const whoDescription =
  'It is developing by Team Kōdā (CODER in Japanese), 8th semester students of NCIT';
const howDescription =
  'Taking of architecture, the initial stage accounts for data gathering, cleaning, curation and other data pre-processing. With this dataset, analysis is done to gain some performance insights, reports and then are presented to students in visual form. The pre-processed/labeled data from the initial stage is splitted into Training set and Test set. The training dataset is trained, modeled with supervised learning algorithms such as, Decision Tree, SVM and Linear Regression, which is then combined with Ensemble Hard or Soft Voting techniques. Cross-validation is also performed during model training with validation data. A prediction model is prepared and the Test set is to be validated with this model. The model evaluation and comparison is performed too.';
const howMuchDescription =
  'Paise ki baat maat karo khun pasina se bahaya hain, college paisa nahi deta ';

const descriptionAll = {
  whatDescription,
  whyDescription,
  whereDescription,
  whenDescription,
  whoDescription,
  howDescription,
  howMuchDescription,
};

export default descriptionAll;

// Shakes the input fields with invalid values.
export const shakeInputs = () => {
  const inputs = document.querySelectorAll(
    'input[type="number"], input[type="email"], input[type="password"], textarea'
  );
  inputs.forEach((input) => {
    if (input.value.trim() === '') {
      input.classList.add('animate-shake');
      setTimeout(() => {
        input.classList.remove('animate-shake');
      }, 500);
    }
  });
};
