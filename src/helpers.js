export const filterRequestsByStatus = (productRequests, requestStatus) => {
    return productRequests.filter((item) => item.status === requestStatus);
    
   
}

