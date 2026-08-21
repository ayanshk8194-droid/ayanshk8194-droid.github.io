$text = [System.IO.File]::ReadAllText("app.bundle.js")
$pattern = '.{0,150}\}\)\)\).{0,150}'
$ms = [regex]::Matches($text, $pattern)
foreach ($m in $ms) {
    Write-Output "---"
    Write-Output $m.Value
}
