result = nil

-- exports['ygt_password']:openHackUI()
function openHackUI()
	SetNuiFocus(true, false)
	SendNUIMessage({type = 'openui'})
	Citizen.Wait(12100)
	return result
end

RegisterNUICallback("close", function(data)
	SetNuiFocus(false, false)
	result = data.result
end)