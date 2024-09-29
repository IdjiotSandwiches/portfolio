"use client";

import { ProjectCard } from "@/app/ui/project-card";

const miniHrmsRebuild = [
  {
    path: '/mini-hrms-rebuild/login.png',
    alt: 'login-page',
  },
  {
    path: '/mini-hrms-rebuild/register.png',
    alt: 'register-page',
  },
  {
    path: '/mini-hrms-rebuild/attendance.png',
    alt: 'attendance-page',
  },
  {
    path: '/mini-hrms-rebuild/input-schedule.png',
    alt: 'input-schedule-page',
  },
  {
    path: '/mini-hrms-rebuild/report.png',
    alt: 'report-page',
  },
  {
    path: '/mini-hrms-rebuild/edit-profile.png',
    alt: 'edit-profile-page',
  },
  {
    path: '/mini-hrms-rebuild/change-password.png',
    alt: 'change-password-page',
  },
  {
    path: '/mini-hrms-rebuild/dashboard.png',
    alt: 'dashboard-page',
  },
  {
    path: '/mini-hrms-rebuild/user-list.png',
    alt: 'user-list-page',
  },
  {
    path: '/mini-hrms-rebuild/edit-user.png',
    alt: 'edit-user-page',
  },
]

const watchGoods = [
  {
    path: '/watch-goods/home.png',
    alt: 'home',
  },
  {
    path: '/watch-goods/products.png',
    alt: 'products',
  },
  {
    path: '/watch-goods/about-us.png',
    alt: 'about-us',
  },
  {
    path: '/watch-goods/locations.png',
    alt: 'locations',
  },
  {
    path: '/watch-goods/contact-us.png',
    alt: 'contact-us',
  },
]

const mlLoans = [
  {
    path: '/ml-loans/home.png',
    alt: 'home',
  },
  {
    path: '/ml-loans/eda.png',
    alt: 'eda',
  },
  {
    path: '/ml-loans/desc.png',
    alt: 'desc',
  },
  {
    path: '/ml-loans/data-preprocessing.png',
    alt: 'data-preprocessing',
  },
  {
    path: '/ml-loans/model-training.png',
    alt: 'model-training',
  },
  {
    path: '/ml-loans/prediction-demo.png',
    alt: 'prediction-demo',
  },
  {
    path: '/ml-loans/prediction-result.png',
    alt: 'prediction-result',
  },
]

export default function ProjectSection() {
	return (
		<section id="projects" className="pt-20 min-h-[calc(100vh-40vh)]">
        <h1 className="drop-shadow-sm text-5xl text-primary text-center font-medium mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProjectCard 
            srcImage="/watch-goods/home.png" 
            altImage="watch-goods" 
            title="WatcHGoods" 
            desc="Human Computer and Interaction Course Project." 
            imagePath={ watchGoods }
            carouselDesc="WatcHGoods is final project for Human and Computer Interaction course. This project aims to create a watch store website with basic understanding of website development technology."
            path={[
              '/svg/html.svg',
              '/svg/css.svg',
              '/svg/js.svg',
            ]}
            github=""
          />
          <ProjectCard 
            srcImage="/ml-loans/home.png" 
            altImage="loan-credit-classification" 
            title="Loan Credit Classification" 
            desc="Machine Learning Course Team Project." 
            imagePath={ mlLoans }
            carouselDesc="Loan credit classification is final team project for Machine Learning course. The team insist of 4 person and I'm responsible for Data Preprocessing and Streamlit deployment."
            path={[
              '/svg/python.svg',
              '/svg/streamlit.svg',
              '/svg/pandas.svg',
              '/svg/numpy.svg',
              '/svg/plotly.svg',
              '/svg/scikitlearn.svg',
              '/svg/git.svg',
            ]}
            github="https://github.com/IdjiotSandwiches/Machine_Learning_Final_Project.git"
          />
          <ProjectCard 
            srcImage="/mini-hrms-rebuild/dashboard.png" 
            altImage="mini-hrms-rebuild" 
            title="Mini HRMS Rebuild" 
            desc="Refine version of Mini HRMS by utilizing the knowledge I gained from my experience in IT Division." 
            imagePath={ miniHrmsRebuild }
            carouselDesc="Mini HRMS Rebuild is my personal project to revamp the original Mini HRMS, which was initially developed by a team of new IT Division Associate Members to learn PHP and Laravel before engaging in real projects."
            path={[
              '/svg/html.svg',
              '/svg/css.svg',
              '/svg/js.svg',
              '/svg/tailwind.svg',
              '/svg/php.svg',
              '/svg/laravel.svg',
              '/svg/jquery.svg',
              '/svg/mysql.svg',
              '/svg/git.svg',
            ]}
            github="https://github.com/IdjiotSandwiches/mini-hrms-rebuild.git"
          />
        </div>
      </section>
	)
}