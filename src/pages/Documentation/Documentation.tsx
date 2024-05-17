import { Link } from 'react-router-dom';

export const Documentation = () => (
  <div className="mt-[84px] lg:mt-[104px] mb-0 bg-background-dark-grey">
    <div className="page-container my-0 pt-12.5 md:pt-17.5 xl:pt-25 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
      <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
        Documentation
      </h1>
      <p className="mt-10">
        This documentation is designed to help you build with Symphony. It
        covers Symphony as a concept, explains the Symphony tech stack, and
        documents advanced topics for more complex applications and use cases.
        This is an open-source community effort, so feel free to suggest new
        topics, add new content, and provide examples wherever you think it
        might be helpful. All documentation can be edited via GitHub.
      </p>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          Development modules
        </h2>
        <p className="mt-10">
          This documentation is designed to help you build with Symphony. It
          covers Symphony as a concept, explains the Symphony tech stack, and
          documents advanced topics for more complex applications and use cases.
          This is an open-source community effort, so feel free to suggest new
          topics, add new content, and provide examples wherever you think it
          might be helpful. All documentation can be edited via GitHub.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          Foundational topics
        </h2>
        <ul className="mt-10">
          {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(item => (
            <div key={item} className="flex mb-4 last:mb-0">
              <p>
                <Link
                  to="#"
                  className="text-blue hover:text-blue-darker underline mr-1"
                >
                  Into the Symphony
                </Link>
                - A quick overview of Symphony
              </p>
            </div>
          ))}
        </ul>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          Symphony stack
        </h2>
        <ul className="mt-10">
          {Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).map(item => (
            <div key={item} className="flex mb-4 last:mb-0">
              <p>
                <Link
                  to="#"
                  className="text-blue hover:text-blue-darker underline mr-1"
                >
                  Into the Symphony
                </Link>
                - A quick overview of Symphony
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
