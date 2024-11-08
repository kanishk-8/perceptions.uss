import Image from "next/image";
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-backgroundColor text-textColor">

      <div className="flex flex-col flex-shrink-0 bg-primarycolor text-primarytext pt-40">
        <h1 className="text-5xl ml-16 font-bold mt-12 mb-14">About Us</h1>
        <div className="mx-0.1 md:mx-0.1 lg:mx-3 mt-24 bg-secondarycolor text-secondarytext p-5 flex flex-col rounded-t-lg">
          <div className="mx-3 text-2xl font-semibold p-3">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem enim impedit incidunt corrupti, amet minus rerum eveniet cumque optio ipsum quia, dolores praesentium facere dolorum, adipisci tempore culpa at deleniti vitae. Modi ad aperiam corrupti perspiciatis,lorem100 sed consequatur omnis asperiores beatae nemo! Dolor iusto et nihil maxime totam cupiditate maiores. Dolore sunt consectetur hic nisi omnis accusamus aut esse illum qui nesciunt aspernatur recusandae ab blanditiis, fugit excepturi in suscipit voluptatem similique deserunt alias,</p><br /><p> voluptatibus doloremque reiciendis odio facilis? Repellendus eligendi cupiditate cum consectetur eum dolorum, veritatis amet culpa quam fugiat similique praesentium. Sit, voluptas cupiditate corporis adipisci ad accusamus?</p>
          </div>
          <div className="h-40 bg-primarycolor text-secondarytext p-6 mt-20 mb-10 rounded-lg">
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
