declare module 'aos' {
    interface AosOptions {
      offset?: number; // Offset from the element
      delay?: number; // Delay in milliseconds
      duration?: number; // Animation duration in milliseconds
      easing?: string; // Easing function
      once?: boolean; // Whether animation should happen only once
      mirror?: boolean; // Whether elements should animate out while scrolling past them
      anchorPlacement?: string; // Which position of the element regarding to window should trigger the animation
    }
  
    interface Aos {
      init(options?: AosOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const aos: Aos;
    export default aos;
  }