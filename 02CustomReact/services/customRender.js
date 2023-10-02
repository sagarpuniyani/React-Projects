const  customRender =  (reactElement , mainContainer ) =>  {

   
    // const domelement = document.createElement (reactElement.type);
    // domelement.innerHTML = reactElement.children;
    // domelement.setAttribute('href' , reactElement.props.href);
    // domelement.setAttribute('target' , reactElement.props.target);

    // // Adding the element into the element 
    // mainContainer.appendChild(domelement);
    

    // loop based approach solution for props 

    const domelement = document.createElement (reactElement.type);
    domelement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        console.log(prop)
        domelement.setAttribute(`${prop}`, reactElement.props[prop]);
    }
    mainContainer.appendChild(domelement);
}

export default customRender