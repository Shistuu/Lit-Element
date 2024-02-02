import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import '@material/mwc-icon/mwc-icon.js';

@customElement('navbar-element')
export class NavbarElement extends LitElement {
  static override readonly styles = css`
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
      font-weight: 600;
      color: white;
      align-items: center;
    }

    .nav-image {
      max-width: 144px;

      img {
        width: 100%;
      }
    }

    .nav-item-right {
      display: flex;
      margin-right: 100px;
    }

    .nav-search {
      border: 1px solid white;
      border-radius: 4px;
      padding: 2px 120px 2px 2px;
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

  static override properties = {
    imageUrl: {type: String},
  };

  imageUrl = '../dev/assets/leapfrog.png';

  override render() {
    return html`
      <div class="navbar">
        <div class="nav-item">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M4 5.01C4 4.451 4.443 4 5.01 4h1.98C7.549 4 8 4.443 8 5.01v1.98C8 7.549 7.557 8 6.99 8H5.01C4.451 8 4 7.557 4 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 13.549 7.557 14 6.99 14H5.01C4.451 14 4 13.557 4 12.99v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C14 7.549 13.557 8 12.99 8h-1.98C10.451 8 10 7.557 10 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6-6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C20 7.549 19.557 8 18.99 8h-1.98C16.451 8 16 7.557 16 6.99V5.01zm0 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm-12 6c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98C8 19.549 7.557 20 6.99 20H5.01C4.451 20 4 19.557 4 18.99v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98zm6 0c0-.558.443-1.01 1.01-1.01h1.98c.558 0 1.01.443 1.01 1.01v1.98c0 .558-.443 1.01-1.01 1.01h-1.98c-.558 0-1.01-.443-1.01-1.01v-1.98z"
              ></path>
            </svg>
          </span>
          <div class="nav-image nav-item">
            <img src=${this.imageUrl} alt="Leapfrog Logo" />
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
            <span>Apps</span>
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
          <!-- Search Filter -->
          <div class="nav-item nav-search">
            <mwc-icon>search</mwc-icon>
            <span>Search</span>
          </div>
          <!-- Notification Icon -->
          <div class="nav-item">
            <mwc-icon>notifications</mwc-icon>
          </div>
          <!-- Question Mark Icon -->
          <div class="nav-item">
            <mwc-icon>question_mark</mwc-icon>
          </div>
          <!-- User Profile Picture -->
          <div class="nav-item">
            <mwc-icon>person</mwc-icon>
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
