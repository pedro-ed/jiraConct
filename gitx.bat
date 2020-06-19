cd C:\Users\Pedro Eduardo\Documents\Estudos\desenvolvimento\DEV\jiraconnector
set /p commit="Nome do Commit: "
git add .
git status
git commit -m %commit%
git log
git push origin master
set /p input=
echo ----------------------------------------
echo Commit Feito com Sucesso, Nome: %commit% | Precione Enter para sair
echo ----------------------------------------

