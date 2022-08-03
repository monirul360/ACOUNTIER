import React from 'react';

const PageTitle = (page) => {
    return (
        <div>
            <div className="page-title">
                <p className='text-center'>{page.title}</p>
            </div>
        </div>
    );
};

export default PageTitle;