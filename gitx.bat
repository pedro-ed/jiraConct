cd C:\Users\Pedro Eduardo\Documents\Estudos\desenvolvimento\DEV\jiraconnector
set /p commit="Nome do Commit: "
git add .
git status
git commit -m %commit%
git push origin master
echo ----------------------------------------
echo Commit Feito com Sucesso, Nome: %commit% | Precione Enter para sair
echo ----------------------------------------
set /p input=
