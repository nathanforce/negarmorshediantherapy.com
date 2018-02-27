import React from "react";

export default ({ data }) => <div>{data.sitePage.id}</div>;

export const query = graphql`
    query IndividualTherapyQuery {
        sitePage {
            id
        }
    }
`;