class Footer extends HTMLElement {
    constructor() {
        super()
    }
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="column">
                    <h3>Started on: June 7th, 2023</h3>
                    <h3>In Web Fundamentals w/Instructor Melissa</h3>
                </div>
                <div class="column">
                    <h3>Completed on: TBD</h3>
                    <h3>In TBD w/TBD</h3>
                </div>
            </footer>
        `
    }
}
customElements.define('footer-component', Footer)