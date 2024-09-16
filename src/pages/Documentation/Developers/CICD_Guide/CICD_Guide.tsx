import { PageNavigator, SectionNavigator } from '@/components';
import { NavItem } from '@/types';
import { Link } from 'react-router-dom';

import cloudbuildLocation from '@/assets/images/cloudbuild-location.png';
import prependDNS from '@/assets/images/prepend-dns-record.png';
import createRunService from '@/assets/images/create-google-cloud-run-service.png';
import cloudRunServiceContinuousDeployment from '@/assets/images/cloud-run-service-continuous-deployment.png';
import cloudBuildSelectRepository from '@/assets/images/cloud-build-select-repository.png';
import cloudBuildBuildConfiguration from '@/assets/images/cloud-build-build-configuration.png';
import cloudBuildContainer from '@/assets/images/cloud-build-container.png';
import cloudBuildContainerInstances from '@/assets/images/cloud-build-container-instances.png';
import cloudRunServiceAutoscaling from '@/assets/images/cloud-run-service-autoscaling.png';
import cloudRunServiceDetails from '@/assets/images/cloud-build-service-details.png';
import cloudBuildManageDomains from '@/assets/images/cloud-build-manage-domains.png';
import addEditDomainMapping from '@/assets/images/add-edit-domain-mapping.png';
import addItemDomainEdit from '@/assets/images/add-item-domain-edit.png';
import swapDApp from '@/assets/images/swap-dApp.png';

const HEADINGS = {
  1: {
    id: 'google-cloud',
    label: 'Google Cloud',
  },
};

const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: '1',
    label: HEADINGS[1].label,
    href: `#${HEADINGS[1].id}`,
  },
];

export const CICD_Guide = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey flex flex-col md:flex-row">
    <PageNavigator />
    <div className="page-container my-0 flex flex-col-reverse md:flex-row pt-[26px] gap-5 lg:gap-10 xl:gap-15 pl-25px md:pl-12 xl:pl-17">
      <div className="my-0 pt-6 pt-8 lg:pt-11 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
        <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
          Setting up CICD
        </h1>
        <p className="mt-10">
          Continuous Integration, Continuous Deployment (CICD) pipelines are
          important for getting fixes or new versions out quickly. Below is a
          guide for doing so.
        </p>
        <div id={HEADINGS[1].id} className="mt-15">
          <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
            {HEADINGS[1].label}
          </h2>

          <p className="mt-5">
            First step is to make sure you have a cloudbuild.yaml file included
            in your repository. Ensure it is tailored to your code. You can get
            a working copy from our repository{' '}
            <Link
              to="https://github.com/Orchestra-Labs/orchestralabs.org/blob/main/cloudbuild.yaml"
              className="text-blue hover:text-blue-darker underline"
            >
              here
            </Link>
            .
          </p>

          <p className="mt-5">
            Place the cloudbuild file in the top level of your directory
            alongside your other configs as seen in the image below.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudbuildLocation}
            alt="Location of cloudbuild.yaml file in repository structure"
          />

          <p className="mt-5">
            Now you've updated your repository, go to Google Cloud. Select the
            Cloud Run service and select to dploy a new Service container.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={createRunService}
            alt="Example of adding a DNS record with pre-pended information"
          />

          <p className="mt-5">Select to deploy from a container.</p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudRunServiceContinuousDeployment}
            alt="Creating a new Google Cloud Run service"
          />

          <p className="mt-5">
            Select the repository to build from. If you don't see it, you'll
            have to go through the on-screen instructions to add it.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudBuildSelectRepository}
            alt="Selecting continuous deployment for Cloud Run service"
          />

          <p className="mt-5">
            Select the build configuration. For most cases the default cloud
            build trigger as shown selected here will be fine.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudBuildBuildConfiguration}
            alt="Selecting a repository for Cloud Build"
          />

          <p className="mt-5">
            If you desire faster access to your service, it's recommended to
            allow unauthenticated invocations and to set a minimum number of
            instances at 1.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudRunServiceAutoscaling}
            alt="Configuring build settings in Cloud Build"
          />

          <p className="mt-5">
            If you're not using the default 8080 port, scroll to the bottom of
            the page and open the "Container(s), Volumes, Networking, Security"
            drop-down. Set the Container port value there to the one you're
            using.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudBuildContainer}
            alt="Setting container port value in Cloud Build settings"
          />

          <p className="mt-5">
            It's not necessary, but if you desire faster access to your service,
            scroll down further into container settings to change minimum
            instances to 1 so it's always available.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudBuildContainerInstances}
            alt="Setting minimum container instances in Cloud Build"
          />

          <p className="mt-5">
            Now just select "create" and watch it build. If you need details
            from a failed build, you can access that through build history in
            the top right.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudRunServiceDetails}
            alt="Configuring autoscaling settings for Cloud Run service"
          />

          <p className="mt-5">
            If you return to the Services page, the next step requires setting
            up a domain. Go to "Manage Custom Domains" in the top right.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={cloudBuildManageDomains}
            alt="Viewing details of a Cloud Run service deployment"
          />

          <p className="mt-5">
            If you have no domains set, go to Add Mapping at the top. Otherwise,
            go to actions at the right side on an existing domain and press to
            edit.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={addEditDomainMapping}
            alt="Managing custom domains in Cloud Build"
          />

          <p className="mt-5">
            At this point if you have no domain, buy one. If you do, go to your
            service provider, such as squarespace, and update their DNS records.
            You will need to be sure to add pre-pended strings for each service
            you add here, but you can map them all to the same base URL and IP
            address.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={prependDNS}
            alt="Adding or editing domain mapping in Cloud Run"
          />

          <p className="mt-5">
            Add the domain with pre-pended information and all to the routes
            here.
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={addItemDomainEdit}
            alt="Adding a domain with pre-pended information in Cloud Run"
          />

          <p className="mt-5">
            From this point just wait for all markers to become green and you
            should be able to view your site at the URL!. It may take 24-48
            hours. After this it should update with every push to main!
          </p>
          <img
            className="w-3/4 max-w-[363px] mb-12.5 md:w-[36vw] md:max-w-[375px] md:mb-0 lg:w-[39.1vw] lg:max-w-[565px] section-container mt-4"
            src={swapDApp}
            alt="Final deployment of the application"
          />
        </div>
      </div>
      <SectionNavigator navigationItems={NAVIGATION_ITEMS} />
    </div>
  </div>
);
