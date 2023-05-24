import cooking from './cooking.gif'

function About() {
    return (
        <div className='about_flex'>
            <img src={cooking} alt="" />
            <div>
                <h4>Hi, this is a website with collections of recipes</h4>
                <p>We have created this website so that everyone can feel like a professional chef and cook a culinary masterpiece. Even if you doubt your culinary abilities, we are sure that following our instructions and recipes, you can easily cook anything. You can start now, moving around the site, you can first select the category of the dish, then choose which dish you want to cook. Clicking on the card will take you to a detailed recipe, where the ingredients will also be indicated, their quantity and measure. if you know in advance what you want to cook, you can use the search on our homepage and find the recipe you need. We hope that you will not have any questions and get a lot of pleasant impressions from cooking. If you have any suggestions or comments on our site, you can always contact us in support and write your request. You can find our contacts in the Contacts tab on the top menu. Have a nice cooking!</p>
            </div>
        </div>
    )

}
export { About };