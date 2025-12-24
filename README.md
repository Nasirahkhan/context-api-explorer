# Context API Explorer App

A comprehensive React Native application demonstrating modern mobile app architecture using React Context API for state management. Features complete authentication, theming, API integration, and smooth user experience.

## Screenshots

<img width="959" height="445" alt="image" src="https://github.com/user-attachments/assets/7b9f5893-5a81-4047-aa52-f10c66e78d71" />
<img width="663" height="362" alt="image" src="https://github.com/user-attachments/assets/96c13b16-6efc-49fa-9cae-1edce107a09c" />
<img width="292" height="134" alt="image" src="https://github.com/user-attachments/assets/08448a38-e0d4-4829-84b9-3f27bdc6399a" />


## Demo Description

### **Core Features**
- **Authentication** - Login via reqres.in API with token persistence
- **Theming** - Dynamic Light/Dark theme switching
- **API Integration** - Product listing with pagination
- **State Management** - Multiple Contexts for clean architecture
- **Navigation** - Stack navigation with auth flow

### **User Journey**
1. **Launch App** → Auto-login checks for saved token
2. **Login Screen** → Enter credentials (`george.bluth@reqres.in` / `password123`)
3. **Product List** → Browse products with infinite scroll
4. **Search** → Filter products in real-time
5. **Pull-to-Refresh** → Swipe down to refresh data
6. **Product Details** → Tap any item for complete info
7. **Theme Toggle** → Switch between Light/Dark modes

## 🏗️ Project Structure
context-api-explorer/
├── context/
│ ├── AuthContext.js # Authentication & token management
│ ├── ApiContext.js # API calls & product data
│ ├── ThemeContext.js # Light/Dark theme management
│ └── LoaderContext.js # Global loading state
├── screens/
│ ├── LoginScreen.js # User authentication
│ ├── ProductListScreen.js # Products with search & pagination
│ └── ProductDetailScreen.js # Individual product details
├── components/
│ ├── Loader.js # Animated loading component
│ └── ProductItem.js # Reusable product card
├── navigation/
│ └── AppNavigator.js # Stack navigation setup
├── config/
│ └── ToastConfig.js # Toast message configuration
└── App.js # Main app with providers


##  Quick Start

```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/context-api-explorer.git
cd context-api-explorer

# Install dependencies
npm install

# Run on iOS
npx react-native run-ios

# Run on Android
npx react-native run-android


Developer

Nasirah Khan
📧 nasirahkhan01@gmail.com
🔗 [GitHub Profile](https://github.com/Nasirahkhan)
