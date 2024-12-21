import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Welcome back, Dom!</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Quisque nec turpis ac libero ultricies aliquam. 
                Nullam nec nunc in sapien auctor fermentum. 
                Sed auctor, libero a lacinia fermentum, 
                justo est ultricies nisi, nec tincidunt quam nunc vel ex. 
                Nullam nec purus in libero tincidunt ultricies. 
                Nulla facilisi. Vivamus vel ex in purus 
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
    }
}