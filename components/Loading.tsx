import React from 'react';
 
type Props = {
  loadingPathname: string;
};

export const Loader: React.FC<Props> = ({ loadingPathname }) => {
  return (
    < >
      loading
      <span className="loader-span">
        {loadingPathname === '/' ? '/home' :
           null}
      </span>
    </>
  );
};
