# PowerShell script to add missing dependencies used in UI components
# Run this script in the project root directory

Write-Host "Adding missing UI component dependencies..."

pnpm add `
  @radix-ui/react-toast `
  motion `
  react-resizable-panels

Write-Host "Dependencies added successfully!"