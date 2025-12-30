
/**
 * Transforms a standard Google Drive sharing link into a direct stream link.
 * Optimized for maximum compatibility across different browser environments.
 */
export const resolveImageUrl = (url: string): string => {
  if (!url) return 'https://images.unsplash.com/photo-1547153760-18fc86324498?auto=format&fit=crop&q=80&w=800';
  
  // Handle Google Drive links
  if (url.includes('drive.google.com')) {
    let fileId = '';
    
    // Pattern 1: /file/d/ID/view
    const dMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (dMatch && dMatch[1]) {
      fileId = dMatch[1];
    } 
    // Pattern 2: ?id=ID or &id=ID
    else {
      const idMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
      if (idMatch && idMatch[1]) {
        fileId = idMatch[1];
      }
    }

    if (fileId) {
      /**
       * We use the 'uc?export=view' endpoint which is the most widely 
       * supported way to display Drive images in <img> tags without 
       * authentication headers, provided the file is shared publicly.
       */
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }
  
  // Return original URL if it's already a direct link or not from Drive
  return url;
};

/**
 * Utility to provide a fallback video or handle future video implementations.
 */
export const resolveVideoUrl = (url?: string): string => {
  if (!url) return ''; // Add default video URL here if needed
  return url;
};
