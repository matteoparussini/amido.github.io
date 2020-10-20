---
id: publishing_nuget
title: Publishing NuGet Packages
sidebar_label: Publishing NuGet Packages
hide_table_of_contents: false
---


## NuGet

We have an open-source listed organisation with multiple packages.

### What we publish

We have a number of NuGet packages that we publish openly. The source code may not be published, but the packages are free to consume.

### Where the packages are published

We are publishing them to: <https://www.nuget.org/profiles/amidostacks>

### How we publish

Once the committed code passes through the quality gates in the pipeline, then the packages will be published automatically. It's up to the consumer to adopt the latest versions.

To publish locally:

`dotnet nuget push --api-key $(NUGET_API_KEY) --source https://api.nuget.org/v3/index.json  **/*.nupkg --skip-duplicate --no-symbols true`

### Known issues

There is bug in .NET Core 2.1 SDK which returns a 409 on trying to publish the symbols package. 
See [dotnet nuget push](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-nuget-push) for more information

When attempting to publish, we will get the following response:
`error: File does not exist (**/*.snupkg).`

In order to remedy this, we set the `--no-symbols` option. The symbols will then need to be published separately.