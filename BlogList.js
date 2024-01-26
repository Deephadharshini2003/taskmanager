import React, { useState } from 'react';
import BlogPost from './BlogPost';

export  const BlogPosts = [
  {
    title: 'ThaiLand',
    content: 'Thailand is popular as a tourist destination due to its geographical and cultural importance. It has some of the most exquisite beaches, rural getaways, Buddhist temples, and shopping malls.Koh Chang is one of the most beautiful islands of Thailand with pristine white sand beaches and crystal clear waters, great for snorkeling and diving Amongst the most popular tourist places in Thailand is Frost Magical Ice of Siam, an ice park that lets you enjoy icy coolness amidst the tropical Thai heat. ',
    author: 'John Doe',
    imageUrl:"https://images.app.goo.gl/mi4XjreZ2vkqUxkw5",
    alt:'image of mauritius'
    
  },
  
  {
    title: 'Bangkok',
    content: 'The city is known for its street life and cultural landmarks, as well as its red-light districts. The Grand Palace and Buddhist temples including Wat Arun and Wat Pho stand in contrast with other tourist attractions such as the nightlife scenes of Khaosan Road and Patpong.An increasing of tourists visiting Bangkok each year has proven that Bangkok is always a popular City for tourists Bangkok, city, capital, and chief port of Thailand. It is located on the delta of the Chao Phraya River, about 25 miles (40 km) from the Gulf of Thailand.',
    author: 'Duckling',
    imageUrl:"https://images.app.goo.gl/tYGksaWBwehBN2tV9",
    alt:'image of mauritius'
  },
  {
    title: 'Mauritius',
    content: 'The main island of Mauritius, where most of the people live, has the capital and largest city, Port Louis. The country spans 2,040 square kilometres (790 sq mi) ...Mauritius, island country in the Indian Ocean, located off the eastern coast of Africa. Physiographically, it is part of the Mascarene Islands. Mauritius is a stable and prosperous Indian Ocean archipelago. Once dependent on sugar exports, the island has built up a strong outsourcing and ',
    author: 'william henry',
    imageUrl:"https://images.app.goo.gl/mK7vLFd8EJ8KasjJ8",
    alt:'image of mauritius'
  },
  {
    title: 'Paris',
    content: 'The Eiffel Tower, the Louvre, the Panthéon, or the Sacré Coeur are surely some of the most recognizable things Paris is known for. If you visit Paris during the high season (from April to the end of October), we recommend buying skip the line tickets for these tourist sites.1. Champs De Mars: Champs De Mars is famous places to see in Paris and for enjoying picnic with your family or friends.The top sightseeing places in Paris are Eiffel Tower, The Louvre, Notre Dame, Arc de Triomphe, Sacre-Coeur, Montmartre. ',
    author: 'william henry',
    imageUrl:"https://images.app.goo.gl/Mx1w4rT6fu5WQ78y9",
    alt:'image of mauritius'
  },

];

// const BlogList = () => {
//   const [selectedPost, setSelectedPost] = useState(null);

//   const handlePostClick = (post) => {
//     setSelectedPost(post);
//   };
// const mystyle2={
//   color:'white'
// }
//   return (
//     <div>
//       <input
//         type="search"
//         placeholder="Search blog posts..."
//         onChange={(e) => {
          
//         }}
//       />
//       <ul className="blog-list">
//         {blogPosts.map((post) => (
//           <li key={post.title}>
//             <a href="#" onClick={() => handlePostClick(post)}>
//               <h2 style={mystyle2}>{post.title}</h2>
            
//              </a>
           
//           </li>
          
//         ))}
//       </ul>
//       {selectedPost && (
//         <BlogPost {...selectedPost} />
//       )}
//     </div>
//   );
// };

// export default BlogList;


