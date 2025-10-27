import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';

const TabCategory = ({ jobs }) => {
    return (
        <Tabs>
            <div className='w-11/12 px-6 py-10 mx-auto'>
                <h1 className='text-3xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
                    Browse Jobs By Categories
                </h1>
                <p className='max-w-3xl mx-auto my-8 pb-12 text-base/relaxed text-center text-gray-500 '>
                    Three categories available for the time being. They are Web
                    Development, Graphics Design and Digital Marketing. Browse them by
                    clicking on the tabs below.
                </p>
                <TabList>
                    <div className='flex  items-center justify-center'>
                        <Tab>Web Developer</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </div>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-6'>
                        {
                            jobs.filter(j => j.category.toLowerCase() === "web developer").map((job) => (<JobCard key={job._id} job={job}></JobCard>))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-6'>
                        {
                            jobs.filter(j => j.category.toLowerCase() === "graphics design").map((job) => (<JobCard key={job._id} job={job}></JobCard>))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 py-6'>
                        {
                            jobs.filter(j => j.category.toLowerCase() === "digital marketing").map((job) => (<JobCard key={job._id} job={job}></JobCard>))
                        }
                    </div>
                </TabPanel>

            </div>
        </Tabs >
    );
};

export default TabCategory;