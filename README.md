# **GeoNav**

**GeoNav** is an immersive **2D-to-3D mapping navigation** tool that allows users to seamlessly explore geographic locations in **2D and 3D**. By clicking on any latitude and longitude on a 2D map, users are transported to a detailed 3D view of that area, where they can interact with the surroundings, such as buildings, streets, and other geographic features. Whether you're exploring new cities or reviewing architectural structures, **GeoNav** provides an immersive experience right from your browser!

---

## **Key Features**

- **Seamless 2D to 3D Transition**: Instantly switch from a 2D map to an interactive 3D view by clicking on any location.
- **3D Interactivity**: Explore the 3D environment, interact with buildings, streets, and other geographic entities.
- **Realistic 3D Rendering**: **Three.js** renders the 3D maps with dynamic lighting and shadows, providing a highly realistic and immersive view.
- **MapTiler Integration**: Utilizes **MapTiler** to create high-quality, customizable 2D and 3D maps with detailed topographical data.
- **Easy Navigation**: Navigate through the 3D environment using intuitive controls for smooth panning, zooming, and rotating.

---

## **How It Works**

1. **Explore in 2D**: Users start by interacting with a **2D map**, powered by **MapTiler**. Clicking on any location (latitude and longitude) triggers the transition to a **3D view** of that area.

2. **3D Transition and Exploration**: Once the user clicks, the map smoothly transitions to the 3D view of the selected location. Users can then explore the 3D environment, interacting with buildings, streets, and other features. The environment is rendered with **realistic lighting and shadows** to enhance the immersion.

3. **Zoom and Interact**: In the 3D view, users can zoom in for a street-level view, rotate, and navigate to explore specific areas in detail. Interacting with entities like buildings allows for a more **immersive AR/VR-like experience**.

---

## **Installation**

To run **GeoNav** locally, follow these steps:

### **1. Clone the repository**:
```bash
git clone https://github.com/your-username/GeoNav.git
```

### **2. Navigate to the project directory**:
```bash
cd GeoNav
```

### **3. Install dependencies**:
```bash
npm install
```
### **4.  Start the local server**:
```bash
npx http-server
```
### **5.  Access the project in your browser**:
```bash
http://127.0.0.1:8080
```

## Vercel Deployment:
Explore the live version of GeoNav hosted on Vercel: https://geonav.vercel.app

## **Future Enhancements**
- **AR/VR Headset Compatibility:** Extend the project to support AR/VR headsets for full immersive experiences.
- **Custom 3D Models:** Add the ability to load custom 3D models, such as landmarks and buildings.
- **Enhanced Interactions:** Improve user interactions with tooltips, pop-ups, and more detailed information about geographic entities.
