import HomeLayout from '../../components/HomeLayout';
import Layout from '../../components/Layout';
import descriptionAll from '../../components/Paragraph';
import whatImg from '../../public/Images/whatImg.png';
import whyImg from '../../public/Images/whyImg.png';
import whereImg from '../../public/Images/whereImg.png';
import whenImg from '../../public/Images/whenImg.png';
import whoImg from '../../public/Images/whoImg.png';
import howImg from '../../public/Images/howImg.png';
import howMuchImg from '../../public/Images/howMuchImg.png';

export default function Home() {
  return (
    <div>
      <Layout title="HOME">
        {/* what Section */}
        <HomeLayout
          sideImg={whatImg}
          title={'What'}
          direction={'md:flex-row'}
          description={descriptionAll.whatDescription}
          bgColor={'bg-white'}
        />
        {/* why Section */}
        <HomeLayout
          sideImg={whyImg}
          title={'Why'}
          description={descriptionAll.whyDescription}
          direction={'md:flex-row-reverse'}
        />
        {/* where Section */}
        <HomeLayout
          sideImg={whereImg}
          title={'Where'}
          direction={'md:flex-row'}
          description={descriptionAll.whereDescription}
          bgColor={'bg-white'}
        />
        {/* when Section */}
        <HomeLayout
          sideImg={whenImg}
          title={'When'}
          description={descriptionAll.whenDescription}
          direction={'md:flex-row-reverse'}
        />
        {/* who Section */}
        <HomeLayout
          sideImg={whoImg}
          title={'Who'}
          direction={'md:flex-row'}
          description={descriptionAll.whoDescription}
          bgColor={'bg-white'}
        />
        {/* how Section */}
        <HomeLayout
          sideImg={howImg}
          title={'How'}
          description={descriptionAll.howDescription}
          direction={'md:flex-row-reverse'}
        />
        {/* how much Section */}
        <HomeLayout
          sideImg={howMuchImg}
          title={'How Much'}
          direction={'md:flex-row'}
          description={descriptionAll.howMuchDescription}
          bgColor={'bg-white'}
        />
        <div className="flex">
          <span className="p-10 text-sm text-gray-400">
            Home page made on " W5HH " Principle
          </span>
        </div>
      </Layout>
    </div>
  );
}
