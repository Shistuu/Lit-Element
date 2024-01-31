var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
let NavbarElement = class NavbarElement extends LitElement {
    static { this.styles = css `
    .navbar {
      background-color: #038e43;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: small;
      height: 57px;
      margin: -10px 0 0 -8px;
      position: sticky;
      top: 0;
      z-index: 1000;
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
  `; }
    render() {
        return html `
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
    handleCreateClick() {
        alert('Create button clicked!');
    }
};
NavbarElement = __decorate([
    customElement('navbar-element')
], NavbarElement);
export { NavbarElement };
//# sourceMappingURL=navbar-element.js.map