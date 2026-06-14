$source = "C:\Users\Anshul Tiwari\.gemini\antigravity\brain\a9e89b34-6e12-4a2a-b70b-4c2cecd48043\anshul_v4_ultimate_professional_photo_1774775439430_1774775634400.png"
$destination = "C:\Users\Anshul Tiwari\Desktop\Portfolio\src\assets\anshul_v4.png"

if (Test-Path $source) {
    Copy-Item -Path $source -Destination $destination -Force
    Write-Output "Copy successful!"
} else {
    Write-Error "Source file not found: $source"
}
