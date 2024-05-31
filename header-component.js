class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 20px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .logo {
                    max-width: 150px;
                    height: auto;
                }

                nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                }

                nav ul li {
                    margin-right: 20px;
                }

                nav ul li:last-child {
                    margin-right: 0;
                }

                nav ul li a {
                    text-decoration: none;
                    color: #333;
                    font-weight: bold;
                }
            </style>
            <header class="header">
                <img src="logo.png" alt="Mongol Post Logo" class="logo">
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
        `;
    }
}

customElements.define('app-header', HeaderComponent);
