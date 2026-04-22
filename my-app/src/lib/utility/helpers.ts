export function formatPathname(pathname: string) {
  return pathname
    .replace(/\//g, " ")  
    .replace(/_/g, " ")     
    .trim()                  
    .replace(/\s+/g, " ") 
    .replace(/\b\w/g, (l) => l.toUpperCase());
}