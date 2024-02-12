import React from 'react';
import AdminPostTable from '@/components/ui/AdminPostTable'
import {getAllPosts} from '@/utils/getAllPosts';


const AllDonationPage = async() => {
  const {data} =  await getAllPosts()
    
    return (
        <div>
           <AdminPostTable data={data}/>
        </div>
    );
};

export default AllDonationPage;