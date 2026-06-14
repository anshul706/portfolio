$source = "C:\Users\Anshul Tiwari\Desktop\Portfolio\src\assets\anshul_v4.png"
$destination = "C:\Users\Anshul Tiwari\Desktop\Portfolio\src\assets\anshul_FINAL_ULTIMATE.png"

if (Test-Path $source) {
    Copy-Item -Path $source -Destination $destination -Force
    Write-Output "Final copy successful!"
} else {
    Write-Error "Source file v4 not found: $source"
}
