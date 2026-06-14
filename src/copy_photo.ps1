$source = "C:\Users\Anshul Tiwari\.gemini\antigravity\brain\a9e89b34-6e12-4a2a-b70b-4c2cecd48043\anshul_ultimate_professional_photo_v3_77_1774773458293.png"
$destination = "C:\Users\Anshul Tiwari\Desktop\Portfolio\src\assets\anshul_professional_v3.png"

if (Test-Path $source) {
    Copy-Item -Path $source -Destination $destination -Force
    Write-Output "Copy successful!"
} else {
    Write-Error "Source file not found: $source"
}
