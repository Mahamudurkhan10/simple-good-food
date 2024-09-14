

import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useMenus = () => {
     const axiosPublic = useAxiosPublic()
     const { refetch, data: menus = [],isPending:loading } = useQuery({
          queryKey: ['menus'],
          queryFn: async () => {
            const res = await axiosPublic.get(`/menus`);
            return res.data;
          }
        });
        return [menus,refetch,loading]
    
};

export default useMenus;