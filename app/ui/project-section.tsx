"use client";

import { ProjectCard } from "@/app/ui/project-card/project-card";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/ui/tabs";

export default function ProjectSection() {
   const aiProjects = [
      {
         srcImage: "/ml-loans/home.png",
         altImage: "loan-credit-classification",
         title: "Loan Credit Classification",
         desc: "Machine Learning Course Team Project.",
         imagePath: [
            '/ml-loans/home.png',
            '/ml-loans/eda.png',
            '/ml-loans/desc.png',
            '/ml-loans/data-preprocessing.png',
            '/ml-loans/model-training.png',
            '/ml-loans/prediction-demo.png',
            '/ml-loans/prediction-result.png',
         ] ,
         carouselDesc: "Loan credit classification is final team project for Machine Learning course. The team insist of 4 person and I'm responsible for Data Preprocessing and Streamlit deployment.",
         path: [
            '/svg/python.svg',
            '/svg/streamlit.svg',
            '/svg/pandas.svg',
            '/svg/numpy.svg',
            '/svg/plotly.svg',
            '/svg/scikitlearn.svg',
            '/svg/git.svg',
         ],
         github: "https://github.com/IdjiotSandwiches/Machine_Learning_Final_Project.git",
         viewLink: "https://german-loan-la01.streamlit.app/",
      },
      {
         srcImage: '/sentiment-analysis/homepage.png',
         altImage: "sentiment-analysis-BERT",
         title: "Sentiment Analysis & Context Extraction using DistilBERT",
         desc: "Natural Language Processing Course Team Project",
         imagePath: [
            '/sentiment-analysis/homepage.png',
            '/sentiment-analysis/result.png',
         ],
         carouselDesc: "This project aims to perform sentiment analysis and capture the context behind smartphone reviews, and I\’m responsible for the NER model.",
         path: [
            '/svg/python.svg',
            '/svg/pandas.svg',
            '/svg/scikitlearn.svg',
            '/svg/pytorch.svg',
            '/svg/hugging-face.svg',
            '/svg/git.svg',
         ],
         github: "https://github.com/IdjiotSandwiches/Combining-Sentiment-Analysis-and-Named-Entity-Recognition-in-Smartphone-Reviews.git",
         viewLink: "https://huggingface.co/spaces/straightline777/Sentiment_Analysis_DistilBERT",
      },
   ];

   const webProjects = [
      {
         srcImage: "/watch-goods/home.png",
         altImage: "watch-goods",
         title: "WatcHGoods",
         desc: "Human Computer and Interaction Course Project.",
         imagePath: [
            '/watch-goods/home.png',
            '/watch-goods/products.png',
            '/watch-goods/about-us.png',
            '/watch-goods/locations.png',
            '/watch-goods/contact-us.png',
         ],
         carouselDesc: "WatcHGoods is final project for Human and Computer Interaction course. This project aims to create a watch store website with basic understanding of website development technology.",
         path: [
            '/svg/html.svg',
            '/svg/css.svg',
            '/svg/js.svg',
         ],
         github: "https://github.com/IdjiotSandwiches/watch-goods.git",
         viewLink: "https://watch-goods-kappa.vercel.app/",
      },
      {
         srcImage: "/mini-hrms-rebuild/dashboard.png",
         altImage: "mini-hrms-rebuild",
         title: "Mini HRMS Rebuild",
         desc: "Refine version of Mini HRMS by utilizing the knowledge I gained from my experience in IT Division.",
         imagePath: [
            '/mini-hrms-rebuild/login.png',
            '/mini-hrms-rebuild/register.png',
            '/mini-hrms-rebuild/attendance.png',
            '/mini-hrms-rebuild/input-schedule.png',
            '/mini-hrms-rebuild/report.png',
            '/mini-hrms-rebuild/edit-profile.png',
            '/mini-hrms-rebuild/change-password.png',
            '/mini-hrms-rebuild/dashboard.png',
            '/mini-hrms-rebuild/user-list.png',
            '/mini-hrms-rebuild/edit-user.png',
         ],
         carouselDesc: "Mini HRMS Rebuild is my personal project to revamp the original Mini HRMS, which was initially developed by a team of new IT Division Associate Members to learn PHP and Laravel before engaging in real projects.",
         path: [
            '/svg/html.svg',
            '/svg/css.svg',
            '/svg/js.svg',
            '/svg/tailwind.svg',
            '/svg/php.svg',
            '/svg/laravel.svg',
            '/svg/jquery.svg',
            '/svg/mysql.svg',
            '/svg/git.svg',
         ],
         github: "https://github.com/IdjiotSandwiches/mini-hrms-rebuild.git",
         viewLink: "",
      },
      {
         srcImage: '/portfolio/home.png',
         altImage: "home",
         title: "Portfolio",
         desc: "Personal portfolio website.",
         imagePath: [
            '/portfolio/home.png',
            '/portfolio/skills.png',
            '/portfolio/projects.png',
         ],
         carouselDesc: "Personal portfolio website developed using NextJS.",
         path: [
            '/svg/html.svg',
            '/svg/css.svg',
            '/svg/js.svg',
            '/svg/tailwind.svg',
            '/svg/nextjs.svg',
            '/svg/typescript.svg',
            '/svg/react.svg',
            '/svg/git.svg',
         ],
         github: "https://github.com/IdjiotSandwiches/portfolio.git",
         viewLink: "https://idjiotsandwiches.vercel.app/",
      }
   ];

	return (
		<section id="projects" className="pt-20 min-h-[calc(100vh-40vh)]">
         <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Projects</h1>
         <Tabs defaultValue="ai" className="w-full md:px-10">
            <TabsList>
               <TabsTrigger value="ai">AI Projects</TabsTrigger>
               <TabsTrigger value="web-dev">Web Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {aiProjects.map((item, index) => {
                  return (
                     <ProjectCard
                        key={`${item.title}-${index}`}
                        srcImage={item.srcImage}
                        altImage={item.altImage}
                        title={item.title}
                        desc={item.desc}
                        imagePath={item.imagePath}
                        carouselDesc={item.carouselDesc}
                        path={item.path}
                        github={item.github}
                        viewLink={item.viewLink}
                     />
                  );
               })}
            </TabsContent>
            <TabsContent value="web-dev" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               {webProjects.map((item, index) => {
                  return (
                     <ProjectCard
                        key={`${item.title}-${index}`}
                        srcImage={item.srcImage}
                        altImage={item.altImage}
                        title={item.title}
                        desc={item.desc}
                        imagePath={item.imagePath}
                        carouselDesc={item.carouselDesc}
                        path={item.path}
                        github={item.github}
                        viewLink={item.viewLink}
                     />
                  );
               })}
            </TabsContent>
         </Tabs>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         </div>
      </section>
	)
}