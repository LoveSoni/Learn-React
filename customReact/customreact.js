
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.googl.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.getElementById('root');

function customRender(element, myContainer) {
    // const domElement = document.createElement(element.type);
    // domElement.innerHTML = element.children;
    // domElement.setAttribute("href", element.props.href);
    // domElement.setAttribute("target", element.props.target);
    // console.log(domElement);
    // console.log(myContainer);
    // myContainer.appendChild(domElement);

    // in above example attributes are static, 
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;
    const attributes = element.props;
    for (const prop in attributes) {
        domElement.setAttribute(prop, element.props[prop])
    }
    myContainer.appendChild(domElement);
}


customRender(reactElement, mainContainer)

