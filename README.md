# Airtable Engineering Assignment - Timeline Component

## **Project Overview**

This project involves building a timeline component in React and TypeScript, which is capable of visualizing items with functionalities such as zooming, creating new events by clicking on lanes, and editing event names. The goal was to develop a modular and maintainable solution with a clean user interface and a focus on usability.

## **Features Checklist**

### **Required Features**

- [x] **Display events correctly on the timeline with proper sizing/positioning**
- [x] **Modular and maintainable code**
- [x] **Intuitive and usable UI**
- [x] **Create new events by clicking on the timeline lanes**
- [x] **Edit event names**

### **Bonus Features**

- [ ] **Drag and Drop** (Not yet implemented)
- [ ] **Resize events** (Not yet implemented)
- [x] **Zoom in and out functionality** (Including **Ctrl + Scroll** and **Ctrl + +/-** shortcuts)
- [ ] **Event creation inside the lane** (Could be enhanced to prevent overlap)
- [ ] **Accessibility improvements** (Not yet implemented)
- [ ] **Automated tests** (Not yet implemented)

## **Technologies Used**

- **React**
- **TypeScript**
- **Tailwind CSS**
- **Day.js** for date manipulation
- **clsx** for conditional class names

## **How to Use**

1. **Zooming**: Use the "+" and "-" buttons or **Ctrl + Scroll** and **Ctrl + +/-** to zoom in and out of the timeline.
2. **Creating Events**: Click on a lane to create a new event at the selected date. Events will be created with a default name and duration.
3. **Editing Events**: Click on the event name to edit it. Changes will be saved automatically when you hit "Enter" or lose focus.

## **Design Decisions and Prioritization**

### **Product and Design Thinking**

The timeline was designed to be simple and functional. The key user features are the ability to create and edit events, zoom in and out, and visualize them accurately on the timeline. I prioritized functionality that was directly relevant to visualizing and interacting with events in a way that would be intuitive for users.

**UI/UX Considerations**:

- The design was focused on clarity. For instance, events are represented by blocks with distinct colors, and users can click to create events, which makes the experience straightforward.
- Zoom functionality was prioritized over features like drag-and-drop or resizing, as zooming directly affects how the timeline is viewed and is a primary interaction point for users.

### **Engineering Decisions**

- **Zooming** was implemented as a bonus feature, and **Ctrl + Scroll** and **Ctrl + +/-** shortcuts were added to enhance the user experience.
- **Modular code** was a priority, with components such as `TimelineItem`, `TimelineLane`, and `TimelineHeader` handling specific parts of the timeline, ensuring clean and maintainable code.
- I considered using **CSS Grid** initially for layout, but **Flexbox** was chosen for simplicity and flexibility, especially for ensuring events don’t overlap.

### **Challenges and Trade-offs**

The biggest challenge was managing the timeline layout and event interactions, particularly considering that **drag-and-drop** and **resize** were considered bonus features. Given the limited time, these features were deferred in favor of delivering the core functionality in a timely manner.

I opted not to implement **drag-and-drop** or **resize** initially, as they would have required more time to implement and test thoroughly.

### **Future Improvements**

- **Drag and Drop**: Implementing a drag-and-drop feature to reorder events within the lanes.
- **Resize Events**: Allow users to resize events by adjusting their start and end dates.
- **Improved Event Creation**: Enhance the logic for adding events to ensure they are positioned correctly within the lanes and don't overlap.
- **Testing**: Writing automated tests for the timeline component to ensure stability and performance.
- **Accessibility**: Implementing better keyboard navigation and screen reader support.
