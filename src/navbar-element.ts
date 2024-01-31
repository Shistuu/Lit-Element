import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('navbar-element')
export class NavbarElement extends LitElement {
  static override styles = css`
    .navbar {
      background-color: #038e43;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: small;
      position: fixed;
      height: 57px;
      z-index: 1;
      margin: -10px 0 0 -8px;
      width: 100%;
    }

    .nav-item {
      display: flex;
      margin: 0 10px;
      cursor: pointer;
      font-weight: bold;
      color: white;
      align-items: center;
    }

    .nav-item-right {
      display: flex;
      margin-right: 100px;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: white;
      min-width: 160px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      color: black;
      z-index: 1;
      padding: 8px;
      border-radius: 4px;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .create-button {
      cursor: pointer;
      background-color: white;
      border: 1px solid #18ab29;
      display: inline-block;
      padding: 5px 15px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #2f6627;
      border-radius: 4px;
      color: black;
      font-weight: normal;
    }

    .create-button:hover {
      background-color: grey;
      color: white;
    }
  `;

  override render() {
    return html`
      <div class="navbar">
        <div class="nav-item">
          <div class="nav-item">
            <img src="./leapfrog.png" alt="Leapfrog Logo" />
          </div>

          <div class="nav-item">Home</div>
          <div class="nav-item dropdown">
            Recent
            <div class="dropdown-content">
              <div>Option 1</div>
              <div>Option 2</div>
            </div>
          </div>

          <div class="nav-item dropdown">
            Spaces
            <div class="dropdown-content">
              <div>Option 1</div>
              <div>Option 2</div>
            </div>
          </div>

          <div class="nav-item dropdown">
            Teams
            <div class="dropdown-content">
              <div>Option 1</div>
              <div>Option 2</div>
            </div>
          </div>

          <div class="nav-item dropdown">
            Apps
            <div class="dropdown-content">
              <div>Option 1</div>
              <div>Option 2</div>
            </div>
          </div>
          <div class="nav-item">Templates</div>
          <div class="nav-item">
            <div class="create-button" @click="${this.handleCreateClick}">
              + Create
            </div>
          </div>
        </div>

        <div class="nav-item-right">
          <div class="nav-item">
            ⌕
            <!-- Search Filter -->
          </div>
          <div class="nav-item">🕭</div>
          <div class="nav-item">
            ❔
            <!-- Question Mark Icon -->
          </div>
          <div class="nav-item">
            👤
            <!-- User Profile Picture -->
          </div>
        </div>
      </div>
    `;
  }
  private handleCreateClick() {
    alert('Create button clicked!');
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'navbar-element': NavbarElement;
  }
}
