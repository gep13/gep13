#load nuget:https://www.myget.org/F/cake-contrib/api/v2?package=Cake.Wyam.Recipe&prerelease

Environment.SetVariableNames();

BuildParameters.SetParameters(context: Context,
                            buildSystem: BuildSystem,
                            title: "gep13",
                            repositoryOwner: "gep13",
                            repositoryName: "gep13",
                            appVeyorAccountName: "GaryEwanPark",
                            webHost: "gep13.co.uk");

BuildParameters.PrintParameters(Context);

Build.Run();