
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export const filterRequestsByStatus = (productRequests, requestStatus) => {
  return productRequests.filter((item) => item.status === requestStatus);
}

export const filterRequestsByCategory = (requestItems, categories) => {
  if(categories.length === 0) return requestItems;
  return requestItems.filter((item) => categories.includes(item.category));
}

export const sortRequests = (requestItems, order) => {
  
  switch(order) {
    case 'votes_asc':
      return requestItems.sort((a, b) => b.upvotes - a.upvotes);  
    case 'votes_desc':
      return requestItems.sort((a, b) => a.upvotes - b.upvotes);  
    case 'comments_asc':
      
      return requestItems.sort((a, b) => {
        const aComments = a.comments ? a.comments.length : 0;
        const bComments = b.comments? b.comments.length: 0;
        return bComments - aComments;
      });
    case 'comments_desc': 
      return requestItems.sort((a, b) => {
        const aComments = a.comments ? a.comments.length : 0;
        const bComments = b.comments? b.comments.length: 0;
        return aComments - bComments;
      });  
    default:
      return requestItems;
  }
  
}

