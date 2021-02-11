import React from 'react'

import Breadcrumb from 'elements/Breadcrumb';


export default class Example extends React.Component {
    render() {
        const breadcrumb = [
            { pageTitle: "Home", pageHref: "" },
            { pageTitle: "House Details", pageHref: "" }
        ];
        return (
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-auto">
                        <Breadcrumb data={breadcrumb} />
                    </div>
                </div>
            </div>
        )
    }
}
