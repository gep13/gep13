#load nuget:https://www.nuget.org/api/v2?package=Cake.Wyam.Recipe&version=0.6.0

Environment.SetVariableNames();

BuildParameters.SetParameters(context: Context,
                            buildSystem: BuildSystem,
                            title: "gep13",
                            repositoryOwner: "gep13",
                            repositoryName: "gep13",
                            appVeyorAccountName: "GaryEwanPark",
                            webHost: "gep13.co.uk",
                            shouldPurgeCloudflareCache: true);

BuildParameters.PrintParameters(Context);

Build.Run();
